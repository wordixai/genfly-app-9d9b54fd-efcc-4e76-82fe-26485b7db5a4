import React from 'react';
import Header from '@/components/ApiManagement/Header';
import ApiPanel from '@/components/ApiManagement/ApiPanel';
import ApiList from '@/components/ApiManagement/ApiList';
import MockDataPanel from '@/components/ApiManagement/MockDataPanel';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      
      <div className="flex-1 container mx-auto py-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-5">
            <ApiPanel />
            <div className="mt-4">
              <ApiList />
            </div>
          </div>
          
          <div className="col-span-7">
            <MockDataPanel 
              apiName="alipay.xx" 
              sceneName="sceneA" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;