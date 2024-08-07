import React from 'react';

function OrderForm() {
  const handlePayment = async () => {
    const data = {
      name: '상품명', // 카카오페이에 보낼 대표 상품명
      totalPrice: 20000 // 총 결제금액
    };

    try {
      const response = await fetch('/order/pay/ready', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      window.location.href = responseData.next_redirect_mobile_url; // 카카오페이 페이지로 리디렉션(모바일웹버전)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button id="btn-pay-ready" onClick={handlePayment}>Pay with KakaoPay</button>
    </div>
  );
}

export default OrderForm;