export const TransactionTimeConvertor = time =>
    !time
        ? "-"
        : `${new Date(time).toDateString()} ${new Date(
              time
          ).toLocaleTimeString()}`;


export const timestampToDate = timestamp => {
    const date = new Date(timestamp*1000)
    return date.toDateString()
}
