export const formatDate = (
  timestamp: Date | string | number | undefined,
  format?: Intl.DateTimeFormatOptions
): string => {
  if (!timestamp) return "";
  const initFormat = format || {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = new Date(timestamp);
  const formatter = new Intl.DateTimeFormat("en-NG", initFormat).format(date);
  return formatter;
};

export const addLineBreaks = (
  text: { match: (arg0: RegExp) => any[] },
  charactersPerLine: string
) => {
  var regex = new RegExp(".{1," + charactersPerLine + "}", "g");
  return text.match(regex).join("\n");
};
