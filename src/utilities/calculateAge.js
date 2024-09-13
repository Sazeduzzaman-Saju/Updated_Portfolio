export function calculateAge(birthdate) {
  const now = new Date();
  const birthDate = new Date(birthdate);

  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;
    const daysInMonth = new Date(
      now.getFullYear(),
      now.getMonth(),
      0
    ).getDate();
    days += daysInMonth;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
}
