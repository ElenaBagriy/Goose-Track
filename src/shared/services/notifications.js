import { toast } from "react-toastify";

export const showSuccessLogIn = () => {
  toast.success('You have logged in successfully');
};
export const showError = () => {
  toast.error('Oohps, something has gone wrong. Try again, please.');
};
export const showSuccessAddTask = () => {
  toast.success("You've just created new task");
};
export const showSuccessEditTask = () => {
  toast.success("You've just  editted task");
};
export const showSuccessDoneTasks = () => {
  toast.success('All done for today!');
};
export const showErrorValidation = message => {
  toast.error(message);
};

export const showSuccessReg = () => {
  toast.success(
    'Thank you for registering! Your account has been created successfully.'
  );
};

export const showUnknwnErrReg = () => {
  toast.error(
    'Registration failed due to an unexpected error. Please try again later.'
  );
};
export const showExistAcctErrorReg = () => {
  toast.error(
    'Registration failed. Probably this email is already associated with an existing account. Please try again.'
  );
};

export const showSuccessMoveTask = columnName => {
  toast.success(
    `Task has been successfully moved to the "${columnName}" column`
  );
};

export const showSuccessDeleteTask = columnName => {
  toast.success(
    `Task has been successfully deleted from the "${columnName}" column`
  );
};

export const showSuccessUserUpdate = () => {
  toast.success('Your account has been updated successfully.');
};

export const showErrorUserUpdate = () => {
  toast.error(
    'Update failed due to an unexpected error. Please try again later.'
  );
};

export const showAnyError = errorText => {
  toast.error(errorText);
};

export const showEmptyTitle = () => {
  toast.error('The title is required to have at least 3 letters');
};