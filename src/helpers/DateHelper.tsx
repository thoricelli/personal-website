
const formatDate = (date: { toLocaleDateString: (arg0: string, arg1: { day: string; month: string; year: string; }) => string; toLocaleTimeString: (arg0: string, arg1: { hour12: boolean; }) => string; }) => {
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }) + " " + date.toLocaleTimeString("en-GB", { hour12: false });
  };

export default formatDate;