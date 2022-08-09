import { useEffect } from "react";
import Footer from "../../components/footer";
import Form from "../../components/form";
import Navbar from "../../components/navbar";
import TableData from "../../components/table";
import { useAppState } from "../../state";
import "./index.scss";
import { useIdleTimer } from "react-idle-timer";
import { fetchMembers } from "../../api/members";

const Home = () => {
  const { signin, token, setTableData } = useAppState();

  const onIdle = async () => {
    const data = await fetchMembers(token);
    setTableData(data);
  };

    const onActive =  () => {
      reset()
    };

  const { reset } = useIdleTimer({
    onIdle,
    onActive,
    timeout: 120000,
  });

  useEffect(() => {
    signin();
  }, []);
  return (
    <main className="main">
      <Navbar />
      <Form />
      <TableData />
      <Footer />
    </main>
  );
};

export default Home;
