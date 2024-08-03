# Сохраните текущий путь
$currentPath = (Get-Location).Path

# Перезапуск PowerShell с правами администратора
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd $currentPath" -Verb RunAs

# Завершите текущую сессию PowerShell
Stop-Process -Id $PID
