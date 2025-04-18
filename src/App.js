// 字符默认为16px

import './App.css';
function App() {
  const getData = {
    // 确保这里的对象与实际数据一致
    "type": "当开始运行",
    "next": {
      "type": "永远循环",
      "statements": {
        "DO": {
          "type": "如果",
          "inputs": {
            "IF0": {
              "type": "判断角色碰撞",
              "fields": {
                "sprite": "自己",
                "sprite1": "鼠标"
              },
              "is_output": true
            }
          },
          "statements": {
            // 检查这里是否有 ELSE 字段
            "DO0": {
              "type": "移动步数",
              "inputs": {
                "steps": {
                  "type": "math_number",
                  "fields": {
                    "NUM": 10
                  },
                  "is_output": true
                }
              }
            },
            "ELSE": {
              "type": "移到位置",
              "inputs": {
                "x": {
                  "type": "math_number",
                  "fields": {
                    "NUM": 0
                  },
                  "is_output": true
                },
                "y": {
                  "type": "math_number",
                  "fields": {
                    "NUM": -100
                  },
                  "is_output": true
                }
              }
            }
          }
        }
      }
    }
  };
  console.log('getData:11', getData);
  return (
    <div className="App">
      <div>
        {getData.type === "当开始运行" && (
          <div>
            <div>{getData.type} {"(()=>{"}</div>
            {getData.next.type === '永远循环' && (
              <div>
                <div className='field1'>{getData.next.type} {"(()=>{"}</div>
                {getData.next.statements.DO.type === '如果' && (
                  <div>
                    <div className="field2">
                      {'if('}{getData.next.statements.DO.inputs.IF0.type}({"'"}
                      {getData.next.statements.DO.inputs.IF0.fields.sprite}{", "}
                      {"'"}
                      {getData.next.statements.DO.inputs.IF0.fields.sprite1}{"') {"}
                    </div>
                    <div className='field3'>{getData.next.statements.DO.statements.DO0.type}{"("}{Number(getData.next.statements.DO.statements.DO0.inputs.steps.fields.NUM)}{");"}</div>
                    {console.log('1111',getData)}
                    {
                    getData.next.statements.DO.statements.ELSE && (
                      <div>
                        <div className='field2'>{"}else{"}</div>
                        <div className='field3'>{getData.next.statements.DO.statements.ELSE.type}{"("}{Number(getData.next.statements.DO.statements.ELSE.inputs.x.fields.NUM)}{","}{Number(getData.next.statements.DO.statements.ELSE.inputs.y.fields.NUM)}{");"}</div>
                        <div className='field2'>{"}"}</div>
                      </div>
                    )}
                  </div>
                )}
                <div className='field1'>{'});'}</div>
              </div>
            )}

            <div>{"});"}</div>
          </div>
        )}
      </div>
    </div>
  )
}



export default App;
