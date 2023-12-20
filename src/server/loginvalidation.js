function validation(values) {
    let errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{3,}$/;

    if (!values.Email) {
        errors.Email = "Email should not be empty";
    } else if (!emailPattern.test(values.Email)) {
        errors.Email = "Invalid email format";
    }

    if (!values.Password) {
        errors.Password = "Password should not be empty";
    } else if (!passwordPattern.test(values.Password)) {
        errors.Password = "Password is not strong enough";
    }

    return errors;
}

export default validation;