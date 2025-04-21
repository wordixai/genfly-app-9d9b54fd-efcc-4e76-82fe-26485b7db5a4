import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { RotateCcw, Send } from 'lucide-react';

interface MockDataPanelProps {
  apiName: string;
  sceneName: string;
}

const MockDataPanel: React.FC<MockDataPanelProps> = ({ apiName, sceneName }) => {
  const [mockData, setMockData] = useState(`{
  "success": true,
  "data": {
    "users": [
      {
        "id": 1,
        "name": "张三",
        "age": 28,
        "email": "zhangsan@example.com",
        "orders": [
          { "id": 101, "amount": 199.99 }
        ]
      },
      {
        "id": 2,
        "name": "李四",
        "age": 32,
        "email": "lisi@example.com",
        "orders": [
          { "id": 102, "amount": 299.99 }
        ]
      }
    ],
    "total": 2
  }
}`);

  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-medium">AI 对话生成 Mock 数据</h2>
          <div className="flex space-x-2 mt-1">
            <span className="text-sm text-gray-500">{apiName}</span>
            <span className="text-sm text-gray-500">{sceneName}</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <RotateCcw size={16} className="mr-1" />
            历史记录
          </Button>
          <Button variant="outline" size="sm">刷新</Button>
          <Button variant="outline" size="sm">设置</Button>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-4">
          欢迎使用 AI Mock 数据生成助手。请描述您需要的 Mock 数据，例如：帮我生成一份带有用户名、邮箱、年龄和购买记录的用户数据，共 10 条。
        </p>
      </div>

      <Tabs defaultValue="mockData">
        <TabsList className="mb-4">
          <TabsTrigger value="mockData">Mock 数据</TabsTrigger>
          <TabsTrigger value="schema">Schema</TabsTrigger>
        </TabsList>
        
        <TabsContent value="mockData" className="space-y-4">
          <Textarea 
            value={mockData}
            onChange={(e) => setMockData(e.target.value)}
            className="font-mono text-sm h-64"
          />
          
          <div className="flex items-center">
            <Textarea 
              placeholder="请描述您需要的 Mock 数据..."
              className="flex-1 mr-2 h-10 py-2"
            />
            <Button variant="blue">
              <Send size={16} className="mr-1" />
              发送
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="schema">
          <Textarea 
            placeholder="Schema definition..."
            className="font-mono text-sm h-64"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MockDataPanel;