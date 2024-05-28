Write-Host "Building..."
Set-Location ".\frontend\"
npm run build
Write-Host "Build Finished!"
Write-Host "============================="
Write-Host "Deploying..."
firebase deploy
Write-Host "Deployed to the server"
Set-Location "C:\Users\aksha\Projects\React\byte-threads\"