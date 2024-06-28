$branch = git rev-parse --abbrev-ref HEAD
Write-Host "Current branch: $branch"

# Function to generate commit message based on file changes
function Generate-CommitMessage {
    $diffOutput = git diff --name-status HEAD
    $commitMessage = ""

    if ($diffOutput) {
        $changes = $diffOutput -split "`n"
        foreach ($change in $changes) {
            $status = $change.Substring(0, 1)
            $filePath = $change.Substring(2).Trim()
            $fileName = [System.IO.Path]::GetFileName($filePath)

            switch ($status) {
                'A' { $commitMessage += "Added $fileName`n" }
                'M' { $commitMessage += "Modified $fileName`n" }
                'D' { $commitMessage += "Deleted $fileName`n" }
                default { $commitMessage += "Updated $fileName`n" }
            }
        }
    }

    if (-not $commitMessage) {
        $commitMessage = "Updated files"
    }

    return $commitMessage.Trim()
}

# Prompt for a commit message
$commitMessage = Read-Host "Enter a commit message (leave blank to auto-generate)"
if (-not $commitMessage) {
    $commitMessage = Generate-CommitMessage
    Write-Host "Generated commit message: `n$commitMessage"
}

$forcePush = $null
while ($forcePush -ne 'Y' -and $forcePush -ne 'N') {
    $forcePush = Read-Host "Do you want to force push to $branch? (Y/N)"
}

git add .
git commit -m $commitMessage

if ($forcePush -eq 'Y') {
    git push origin $branch -f
} else {
    git push origin $branch
}

Write-Host "Git push completed."
