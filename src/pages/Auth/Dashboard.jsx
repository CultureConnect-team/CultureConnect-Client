import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../api";
import { useAuth } from "../../context/UseAuth";
import LayoutAuth from "../../components/Layout/AuthLayout";
import LoadingAnimation from "../../components/UI/LoadingAnimation";
import Hero from "../../components/UI/Dashboard/Hero";
import Destination from "../../components/UI/Dashboard/Destination";
import SavedDestination from "../../components/UI/Dashboard/SavedDestination";

const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [category, setCategory] = useState("kuliner");

  useEffect(() => {
    // Jika belum login, arahkan ke halaman login
    if (!isAuthenticated) {
      navigate("/");
      return;
    }

    const fetchDashboard = async () => {
      try {
        setIsLoading(true);
        const result = await getUserData();
        
        if (!result.user?.name || !result.user?.email) {
          navigate("/fill-user-data");
          return;
        }

        setData(result);
      } catch (error) {
        console.error("Gagal mengambil data pengguna:", error);
        navigate("/fill-user-data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboard();
  }, [isAuthenticated, navigate]);

  if (isLoading) return <LoadingAnimation />;

  return (
    <LayoutAuth>
      <Hero />
      <SavedDestination userId={data.user.id} />
      <Destination category={category} setCategory={setCategory} />
    </LayoutAuth>
  );
};

export default Dashboard;
