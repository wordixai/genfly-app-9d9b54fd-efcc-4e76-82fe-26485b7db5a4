import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Layers, Search, Settings, Upload } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold mr-2">Bakery UI</h1>
            <span className="text-xs bg-gray-700 px-2 py-0.5 rounded">3.1.1</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Layers size={18} className="mr-2" />
              默认场景组
            </Button>
            <Button variant="ghost" size="sm">
              <Upload size={18} />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings size={18} />
            </Button>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between">
          <div className="relative w-96">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input 
              className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 w-full"
              placeholder="搜索接口或场景"
            />
          </div>
          <Button variant="blue">
            + 新增接口
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;