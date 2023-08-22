import StatCard from "./StatCard";
interface Stat {
  id: string;
  border: string;
  number: number;
  title: string;
}
function Stats() {
  const stats: Stat[] = [
    {
      id: "1",
      title: "Programes Certifiés",
      number: 60,
      border: "border-b sm:border-r  ",
    },
    {
      id: "2",
      title: "Programes Certifiés",
      number: 200,
      border: "border-b  ",
    },
    {
      id: "3",
      title: "Programes Certifiés",
      number: 110,
      border: "sm:border-r sm:border-b-0 border-b ",
    },
    {
      id: "4",
      title: "Programes Certifiés",
      number: 24,
      border: "",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 mxl:px-10 xl:px-20 lg:px-0 px-5 sm:py-10 ">
      {stats.map((stat) => (
        <StatCard key={stat.id} StatDetails={stat} />
      ))}
    </div>
  );
}

export default Stats;
