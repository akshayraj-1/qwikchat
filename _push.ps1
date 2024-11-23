# Check if the current directory is a Git repository
function Check-GitRepository {
    if (-not (Test-Path ".git")) {
        Write-Host "This directory is not a Git repository."

        $initializeRepo = Read-Host "Would you like to initialize a new Git repository here? (Y/N)"
        if ($initializeRepo -eq 'Y') {
            git init
            Write-Host "Initialized a new Git repository."

            # Prompt for Git user configuration if not already set
            $globalName = git config --global user.name
            $globalEmail = git config --global user.email

            if (-not $globalName) {
                $userName = Read-Host "Enter your Git user name"
                git config --global user.name "$userName"
                Write-Host "Set global Git user name to $userName."
            }

            if (-not $globalEmail) {
                $userEmail = Read-Host "Enter your Git email address"
                git config --global user.email "$userEmail"
                Write-Host "Set global Git email to $userEmail."
            }

            # Prompt for an initial commit if there are files in the directory
            $initialCommit = Read-Host "Would you like to make an initial commit with all current files? (Y/N)"
            if ($initialCommit -eq 'Y') {
                git add -A
                $initialMessage = Read-Host "Enter an initial commit message (default: 'Add initial project setup')"
                if (-not $initialMessage) { $initialMessage = "Add initial project setup" }
                git commit -m "$initialMessage"
                Write-Host "Made initial commit with message: $initialMessage"
            }
        } else {
            Write-Host "Exiting. A Git repository is required to proceed with commits and pushes." -ForegroundColor Red
            exit 0
        }
    } else {
        Write-Host "Git repository found."
    }
}

# Call the Git repository check function at the start
Check-GitRepository

$branch = git rev-parse --abbrev-ref HEAD
Write-Host "Current branch: $branch"

# Function to generate a commit message for a file change
function Generate-CommitMessage {
    param (
        [string]$status,
        [string]$fileName
    )

    switch ($status) {
        'A' { return "Add $fileName" }
        'M' { return "Modify $fileName" }
        default { return "Update $fileName" }
    }
}

# Function to get a commit message from the user, with fallback to auto generation
function Get-CommitMessage {
    param (
        [string]$status,
        [string]$fileName
    )

    $customMessage = Read-Host "Enter a custom commit message for $fileName (press Enter to use auto-generated)"

    if ($customMessage) {
        return $customMessage
    } else {
        return Generate-CommitMessage -status $status -fileName $fileName
    }
}

# Ask if the user prefers individual commits or a batch commit
$commitType = $null
while ($commitType -ne 'I' -and $commitType -ne 'B') {
    $commitType = Read-Host "Would you like to commit files individually (I) or in a batch (B)? (Enter 'I' for individual, 'B' for batch)"
}

$forcePush = $null
while ($forcePush -ne 'Y' -and $forcePush -ne 'N') {
    $forcePush = Read-Host "Do you want to force push to $branch? (Y/N)"
}

Write-Host "-----------------------------"

# Get the changed files
$diffOutput = git diff --name-status HEAD
if ($diffOutput) {
    $changes = $diffOutput -split "`n"  # Correcting the line break delimiter

    if ($commitType -eq 'B') {
        # Batch commit: stage and commit all changes together
        $commitMessages = @()

        foreach ($change in $changes) {
            $status = $change.Substring(0, 1)
            $filePath = $change.Substring(2).Trim()
            $fileName = [System.IO.Path]::GetFileName($filePath)

            Write-Host "Processing file: $fileName"
            # Stage the specific file
            git add $filePath
            Write-Host "Staged file: $fileName"

            # Get the commit message (either custom or auto-generated)
            $commitMessage = Get-CommitMessage -status $status -fileName $fileName
            $commitMessages += $commitMessage
        }

        # Commit all staged files in one go
        $commitMessageForAll = $commitMessages -join "; "  # Joining messages for the commit
        git commit -m "$commitMessageForAll"
        Write-Host "Committed changes with message: $commitMessageForAll"
    } else {
        # Individual commits: commit each file separately
        foreach ($change in $changes) {
            $status = $change.Substring(0, 1)
            $filePath = $change.Substring(2).Trim()
            $fileName = [System.IO.Path]::GetFileName($filePath)

            Write-Host "Processing file: $fileName"
            # Stage the specific file
            git add $filePath
            Write-Host "Staged file: $fileName"

            # Get the commit message (either custom or auto-generated)
            $commitMessage = Get-CommitMessage -status $status -fileName $fileName

            # Commit the file with the chosen commit message
            git commit -m "$commitMessage"
            Write-Host "Committed file: $fileName"
            Write-Host "-----------------------------"
        }
    }

    # Push the commits
    Write-Host "Pushing commits to branch: $branch"
    if ($forcePush -eq 'Y') {
        git push origin $branch -f
    } else {
        git push origin $branch
    }

    # Check the exit status of the push command
    if ($LASTEXITCODE -eq 0) {
        if ($forcePush -eq 'Y') {
            Write-Host "Force pushed to $branch."
        } else {
            Write-Host "Pushed to $branch."
        }
    } else {
        Write-Host "Push to $branch failed. Please check for errors."
    }

    Write-Host "-----------------------------"
    Write-Host "Git push process completed."
} else {
    Write-Host "No changes to commit."
}
