export const ReportData = elements => {
  return elements.map(element => {
    return {
      id: element?.id,
      text: element?.text,
      title: element?.title,
      created_at: element?.created_at,
      name: element?.user ? element.user.name : null,
      phoneNumber: element?.user ? element.user.phoneNumber : null,

    };
  });
};
