import * as Yup from 'yup';

export const nameRegExp = new RegExp(
    "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    );
  
export const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
export const phoneRegExp =
/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const SignupSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Name is too Short!')
    .max(18, 'Name may contain only 18 characters.')
    .matches(nameRegExp,"Name may contain only letters, apostrophe, dash and spaces.")
    .required('Name is required'),
    email: Yup.string('Enter your email').email('Enter a valid email').required('Email is required.'),
    password: Yup.string('Enter your password.')
    .min(8, 'Password should be of minimum 8 characters length.')
    .max(16, 'Too Long!').required('Password is required.')
    .matches(
        passwordRegExp,
        'Password must contain minimum 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.'
      ),
});

export const LoginSchema = Yup.object().shape({
    email: Yup.string('Enter your email').email('Enter a valid email').required('Email is required.'),
    password: Yup.string('Enter your password.')
    .min(8, 'Password should be of minimum 8 characters length.')
    .max(16, 'Too Long!').required('Password is required.')
    .matches(
        passwordRegExp,
        'Password must contain minimum 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.'
      ),
});

export const userFormSchema = Yup.object().shape({
    name: Yup.string()
      .required('This field is required')
      .matches(
        nameRegExp,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .max(16, 'Name may contain only 16 characters'),
    phone: Yup.string().matches(phoneRegExp, {
      message:
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
      excludeEmptyString: true,
    }),
    birthday: Yup.date('Invalid date format'),
    skype: Yup.string().max(16, 'Skype may contain only 16 characters'),
    email: Yup.string()
      .email('Enter a valid email')
      .required('Email is required.'),
    image: Yup.mixed().nullable('nullable')
    .test('is-valid-type', 'Invalid image type', value => {
      return value === '' || isValidFileType(value);
    }),
  });

  const validFileExtensions = {
    image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'],
  };
  
  const isValidFileType = value => {
    if (value === null) return true;
    if (typeof value === 'string' && value.includes('image')) return true;
    if (value) {
      if (value?.length === 0) return true;
      const fileName = value[0].name.toLowerCase();
      return validFileExtensions['image'].indexOf(fileName.split('.').pop()) > -1;
    }
  };