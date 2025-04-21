import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Edit, MoreVertical } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';

interface ApiItemProps {
  name: string;
  type: string;
  responseTime: string;
  enabled: boolean;
  expanded?: boolean;
}

const ApiItem: React.FC<ApiItemProps> = ({ name, type, responseTime, enabled, expanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const [isEnabled, setIsEnabled] = useState(enabled);

  return (
    <div className="border-b border-gray-200">
      <div className="flex items-center px-4 py-3 hover:bg-gray-50">
        <button 
          onClick={() => setIsExpanded(!isExpanded)} 
          className="mr-2 text-gray-500"
        >
          {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </button>
        
        <div className="flex-1">
          <div className="flex items-center">
            <span className="font-medium text-gray-800">{name}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="bg-gray-100 text-gray-600">{type}</Badge>
          <span className="text-sm text-gray-500">{responseTime}</span>
          <Switch 
            checked={isEnabled} 
            onCheckedChange={setIsEnabled}
          />
          <button className="text-gray-500">
            <Edit size={16} />
          </button>
          <button className="text-gray-500">
            <MoreVertical size={16} />
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="bg-gray-50 px-10 py-3">
          <div className="flex space-x-4">
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-500 mb-1">响应场景</h4>
              <div className="flex space-x-2">
                <Badge className="bg-gray-200 text-gray-700">sceneA</Badge>
                <Badge className="bg-gray-200 text-gray-700">支付成功场景</Badge>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-500 mb-1">支付失败场景</h4>
              <div className="flex space-x-2">
                <Badge className="bg-gray-200 text-gray-700">sceneB</Badge>
                <Badge className="bg-gray-200 text-gray-700">支付失败场景</Badge>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <button className="text-blue-500 text-sm">+ 添加自定义</button>
          </div>
        </div>
      )}
    </div>
  );
};

const ApiList: React.FC = () => {
  const apis = [
    { name: 'alipay.xx', type: 'RPC', responseTime: '100ms', enabled: true, expanded: true },
    { name: 'order.list', type: 'GraphQL', responseTime: '80ms', enabled: false },
    { name: 'user.info', type: 'REST', responseTime: '150ms', enabled: false },
  ];

  return (
    <div className="border border-gray-200 rounded-md">
      {apis.map((api, index) => (
        <ApiItem 
          key={index}
          name={api.name}
          type={api.type}
          responseTime={api.responseTime}
          enabled={api.enabled}
          expanded={api.expanded}
        />
      ))}
    </div>
  );
};

export default ApiList;