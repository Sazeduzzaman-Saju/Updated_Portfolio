import Dashboard from "@/src/components/dashboard/Dashboard";
import Layout from "@/src/layout/Layout";
import About from "components/About";
import Contact from "components/Contact";
import Home from "components/Home";
import News from "components/News";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Service from "components/Service";
import dynamic from "next/dynamic";
const Portfolio = dynamic(() => import("components/Portfolio"), {
  ssr: false,
});
const queryClient = new QueryClient();
const Index = () => {
  return (
    <Layout>
      {/* HOME */}
      <Home />
      {/* /HOME */}
      {/* ABOUT */}
      <About />
      {/* /ABOUT */}
      {/* SERVICE */}
      <Service />
      {/* /SERVICE */}
      <div className="tokyo_tm_portfolio_titles" />
      {/* PORTFOLIO */}
      <Portfolio />
      {/* /PORTFOLIO */}
      {/* NEWS */}
      <News />
      {/* /NEWS */}
      {/* CONTACT */}
      <Contact />
      {/* /CONTACT */}
      <QueryClientProvider client={queryClient}>
        <Dashboard></Dashboard>
      </QueryClientProvider>
    </Layout>
  );
};
export default Index;
