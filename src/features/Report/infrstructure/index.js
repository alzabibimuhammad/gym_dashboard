export const ReportData = elements => {
  return elements.map(element => {
    const dateOnly = element?.created_at ? element.created_at.split('T')[0] : null;

    return {
      id: element?.id,
      text: element?.text,
      title: element?.title,
      created_at:dateOnly,
      name: element?.user ? element.user.name : null,
      phoneNumber: element?.user ? element.user.phoneNumber : null,

    };
  });
};
