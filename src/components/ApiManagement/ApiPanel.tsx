import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, Filter } from 'lucide-react';

const ApiPanel: React.FC = () => {
  return (
    <div className="bg-white rounded-md border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">API 列表</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <ArrowUpDown size={16} className="mr-1" />
              升序
            </Button>
            <Button variant="outline" size="sm">
              <Filter size={16} className="mr-1" />
              筛选
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiPanel;