let main = () => {
  const userDateStr = "2023-03-22";
  const userDate = new Date(userDateStr);

  // get today's date
  const today = new Date();
  console.log(Date.parse(today),"Future Date",today)
  
  console.log(Date.parse(userDate),"Today Live Date",userDate)


  // calculate time difference in milliseconds
  const timeDiffMs = userDate.getTime() - today.getTime();

  console.log(timeDiffMs,"DIFF");

  // calculate number of days
  const days = Math.floor(timeDiffMs / (1000 * 60 * 60 * 24));

  // calculate number of hours
  const hours = Math.floor(
    (timeDiffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  // calculate number of minutes
  const minutes = Math.floor((timeDiffMs % (1000 * 60 * 60)) / (1000 * 60));

  // calculate number of seconds
  const seconds = Math.floor((timeDiffMs % (1000 * 60)) / 1000);

  console.log(
    `Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`
  );
};

main();
