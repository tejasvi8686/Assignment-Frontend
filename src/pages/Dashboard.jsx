
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import ActiveOrders from './ActiveOrders';
import CompletedOrders from './CompletedOrders';
import ThemeToggle from '../components/ThemeToggle';

const Dashboard = () => {
  return (
    <div>
      <ThemeToggle />
      <Tabs>
        <TabList>
          <Tab>Active Orders</Tab>
          <Tab>Completed Orders</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ActiveOrders />
          </TabPanel>
          <TabPanel>
            <CompletedOrders />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Dashboard;
