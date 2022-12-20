export const parseVideoDuration = (duration: string): string => {
    const durationParts: string[] = duration
      .replace("PT", "")
      .replace("H", ":")
      .replace("M", ":")
      .replace("S", "")
      .split(":");
      //we get string and split it by column

      //accourding to duration we're parsing the data and returing as needed
  
    if (durationParts.length === 3) {
      return `${durationParts[0]}:${
        parseInt(durationParts[1]) < 9 ? `0${durationParts[1]}` : durationParts[1]
      }:${
        parseInt(durationParts[2]) < 9 ? `0${durationParts[2]}` : durationParts[2]
      }`;
    }
  
    if (durationParts.length === 2) {
      return `${durationParts[0]}:${
        parseInt(durationParts[1]) < 9 ? `0${durationParts[1]}` : durationParts[1]
      }`;
    }
  
    if (durationParts.length === 1) {
      return `0:${
        parseInt(durationParts[0]) < 9 ? `0${durationParts[0]}` : durationParts[0]
      }`;
    }
  
    return "";
  };
  //we get a string of video duration min and seconds
  //copied from stackoverflow