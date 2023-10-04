# Check if a commit message is provided as a parameter
if [ $# -eq 0 ]; then
    echo "Usage: $0 <commit_message>"
    exit 1
fi

# Add all files in the current directory to the staging area
git add .

# Commit with the provided commit message
commit_message="$1"
git commit -m "$commit_message"

# Push changes to the repository
git push origin master  # Modify 'master' to your branch name if needed

