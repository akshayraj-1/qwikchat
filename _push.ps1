$branch = git rev-parse --abbrev-ref HEAD
Write-Host "Current branch: $branch"

$forcePush = $null
while ($forcePush -ne 'Y' -and $forcePush -ne 'N') {
    $forcePush = Read-Host "Do you want to force push to $branch? (Y/N)"
}

git add .
git commit -m "Auto"

if ($forcePush -eq 'Y') {
    git push origin $branch -f
} else {
    git push origin $branch
}

Write-Host "Git push completed."
