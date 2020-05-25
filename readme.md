Usage
==

```javascript
import React, { useCallback } from 'react';
import { useEpayco } from 'react-epayco';


export const PayButton: React.FC<Props> = () => {
  const { epayco } = useEpayco({
    key: 'xxxxx',
  });

  const handlePay = useCallback(() => {
    var data = {
      name: "Your product name",
      description: 'Your product description',
      amount: 5000,
      external: "false"
    };

    epayco.open(data);
  }, [epayco]);

  return (
    <button onClick={handlePay}>
      Demo pay button
    <button>
  )
};
```
