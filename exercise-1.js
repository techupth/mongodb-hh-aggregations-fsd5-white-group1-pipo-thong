db.pizzaOrders.aggregate([
  {
    $group: {
      _id: "$credit_card_type",
      total_by_payment: {
        $sum: "$total_price",
      },
    },
  },
]);
