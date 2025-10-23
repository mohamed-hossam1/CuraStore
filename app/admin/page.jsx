// import StatusOverview from "./_components/StatusOverview";
// import DashboardCharts from "./_components/dashboard-charts";
// import RecentOrders from "@/app/(dashboard)/orders/_components/orders-table";

import SalesOverview from "@/_components/SalesOverview";

export const metadata = {
  title: 'Sign In / Sign Up - MegaMart',
  description: 'Login or create a new account',
}
export default async function DashboardPage() {
  return (
    <>
      <section>
        <h1 className="text-lg md:text-xl font-semibold mb-6">Dashboard Overview</h1>

        <div className="space-y-8 mb-8">
          <SalesOverview />
          {/* <StatusOverview /> */}
          {/* <DashboardCharts /> */}
        </div>
      </section>

      <section>
        {/* <PageTitle component="h2">Recent Orders</PageTitle>

        <RecentOrders /> */}
      </section>
    </>
  );
}
