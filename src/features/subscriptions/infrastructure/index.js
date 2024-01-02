
 export const SubscriptionsData = elements => {
  return elements.map(element => {

    return {
      id: element?.id,
      name: element?.userNaname,
      remainingTime: element?.remainingTime,
      paidStatus:element?.paidStatus,
      daysNotPaid:element?.daysNotPaid,
      SubscriptionDate: element?.SubscriptionDate
    }
  })
}
