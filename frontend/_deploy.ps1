Write-Host "Building..."
npm run build
Write-Host "Build Finished!"
Write-Host "============================="
Write-Host "Deploying..."
firebase deploy
Write-Host "Deployed to the server"