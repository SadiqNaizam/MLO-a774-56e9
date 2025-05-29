import React from 'react';
import MainDashboardLayout from '../components/layout/MainDashboardLayout';
import PageHeader from '../components/Dashboard/PageHeader';
import MetricsSection from '../components/Dashboard/MetricsSection';
import LeadTrackingChart from '../components/Dashboard/LeadTrackingChart';
import InsightCards from '../components/Dashboard/InsightCards';

/**
 * DashboardPage is the main view for the Leads Dashboard.
 * It assembles various dashboard components within the MainDashboardLayout.
 * This page corresponds to the "Dashboard Overview" target page.
 */
const DashboardPage: React.FC = () => {
  return (
    <MainDashboardLayout>
      {/* PageHeader displays the title 'Dashboard' and tabs/date range pickers */}
      <PageHeader title="Dashboard" />

      {/* MetricsSection displays funnel overview and sources pie chart */}
      <MetricsSection />

      {/* LeadTrackingChart visualizes leads over time */}
      <LeadTrackingChart />

      {/* InsightCards displays key insights like reasons for lost leads and other data */}
      <InsightCards />
    </MainDashboardLayout>
  );
};

export default DashboardPage;
