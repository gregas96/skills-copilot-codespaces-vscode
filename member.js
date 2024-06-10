function skillsMember()
{
    // Get the input
    var skills = document.getElementById('skills').value;
    var skillsError = document.getElementById('skillsError');
    var valid = true;

    // Check if the input is empty
    if (skills == "")
    {
        skillsError.innerHTML = "Please enter your skills";
        valid = false;
    }
    else
    {
        skillsError.innerHTML = "";
    }

    return valid;
}