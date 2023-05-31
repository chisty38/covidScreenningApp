export const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage:
        "Name shouldn't be empty",
      label: "NAME",
      required: true,
    },
    {
        id: 3,
        name: "email",
        type: "email",
        placeholder: "Enter your email",
        errorMessage: "It should be a valid email address!",
        label: "Email *",
        required: true,
      },
      {
        id: 30,
        name: "leadSource",
        type: "text",
        placeholder: "SELECT SOURCE",
        errorMessage: "Please SELECT LEAD SOURCE!",
        label: "LEAD SOURCE",
        required: true,
        param : [
            { key: '401auto', ItemId: '401auto', ItemName: '401 Auto Lead' },
            { key: 'cars', ItemId: 'cars', ItemName: 'Dealer Trade' }]
      },
  ];