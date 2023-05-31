export const inputs = [
    //{
    //  id: 1,
    //  name: "name",
    //  type: "text",
    //  placeholder: "Name",
    //  errorMessage:
    //    "Name shouldn't be empty",
    //  label: "NAME",
    //  required: true,
    //},
    {
        id: 2,
        name: "user_email",
        type: "email",
        placeholder: "Enter your email",
        errorMessage: "It should be a valid email address!",
        label: "EMAIL",
        required: true,
      },
  ];

  export const inputsDropDown = [
      {
        id: 3,
        name: "question1",
        type: "text",
        placeholder: "SELECT ANSWER 1",
        errorMessage: "SELECT QUESTION 1",
        label: "QUESTION 1",
        required: true,
        param : [
            { key: '401auto', ItemId: 'yes', ItemName: 'YES' },
            { key: 'cars', ItemId: 'no', ItemName: 'NO' }]
      },
      {
        id: 4,
        name: "question2",
        type: "text",
        placeholder: "SELECT ANSWER 2",
        errorMessage: "SELECT QUESTION 2",
        label: "QUESTION 2",
        required: true,
        param : [
            { key: '401auto', ItemId: 'yes', ItemName: 'YES' },
            { key: 'cars', ItemId: 'no', ItemName: 'NO' }]
      },
      {
        id: 5,
        name: "question3",
        type: "text",
        placeholder: "SELECT ANSWER 3",
        errorMessage: "SELECT QUESTION 3",
        label: "QUESTION 3",
        required: true,
        param : [
            { key: '401auto', ItemId: 'yes', ItemName: 'YES' },
            { key: 'cars', ItemId: 'no', ItemName: 'NO' }]
      },
  ];