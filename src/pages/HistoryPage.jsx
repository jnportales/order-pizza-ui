import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { deleteOrder, fetchOrders } from '../api/orders';

const HistoryPage = () => {
  const [rawOrders, setRawOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for filter selections: { Crust: '-', Flavor: '-', Size: '-', Table_No: '-' }
  const [filterSelections, setFilterSelections] = useState({
    Crust: '-',
    Flavor: '-',
    Size: '-',
    Table_No: '-',
  });

  const loadOrders = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchOrders();
      setRawOrders(data);
    } catch (err) {
      console.error('Error fetching orders:', err);
      setError('Failed to fetch orders.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  // 1. Calculate filtered orders based on current selections
  // This is memoized so it only re-calculates when rawOrders or filterSelections change.
  const filteredOrders = useMemo(() => {
    return rawOrders.filter(order => {
      return Object.keys(filterSelections).every(key => {
        const selectedValue = filterSelections[key];
        if (selectedValue === '-') {
          return true;
        } else {
          return String(order[key]) === String(selectedValue);
        }
      });
    });
  }, [rawOrders, filterSelections]);

  // 2. Calculate available options based on the filtered results
  // This is also memoized so it only re-calculates when filteredOrders changes.
  const filterOptions = useMemo(() => {
    const options = {
      Crust: Array.from(new Set(filteredOrders.map(o => o.Crust))).sort(),
      Flavor: Array.from(new Set(filteredOrders.map(o => o.Flavor))).sort(),
      Size: Array.from(new Set(filteredOrders.map(o => o.Size))).sort(),
      Table_No: Array.from(new Set(filteredOrders.map(o => o.Table_No))).sort(),
    };
    return options;
  }, [filteredOrders]);

  // 3. Handle selection changes
  const handleFilterChange = (key, value) => {
    setFilterSelections((prev) => {
      const next = { ...prev, [key]: value };
      return next;
    });
  };

  const handleClearFilters = () => {
    setFilterSelections({
      Crust: '-',
      Flavor: '-',
      Size: '-',
      Table_No: '-',
    });
  };

  const handleDelete = async (order) => {
    if (window.confirm(`Delete Order #${order.Order_ID}? from table #${order.Table_No}?`)) {
      try {
        await deleteOrder(order.Order_ID);
        await loadOrders();
      } catch (err) {
        console.error('Error deleting order:', err);
      }
    }
  };

  if (loading) {
    return <div>Loading orders...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1 data-testid="history-heading" style={{ marginBottom: '10px' }}>Order History</h1>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
        {Object.keys(filterSelections).map(key => (
          <div key={key} style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontSize: '0.8rem', marginBottom: '4px' }}>{key.replace('_', ' ')}</label>
            <select
              data-testid={`${key.toLowerCase()}-select`}
              value={filterSelections[key]}
              onChange={(e) => handleFilterChange(key, e.target.value)}
              style={{ padding: '5px', minWidth: '120px' }}
            >
              <option value="-">-</option>
              {filterOptions[key].map((opt, idx) => (
                <option key={idx} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        ))}
        <button
          data-testid="clear-button"
          onClick={handleClearFilters}
          style={{
            padding: '5px 10px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            height: '30px'
          }}
        >
          Clear
        </button>
      </div>

      {filteredOrders.length === 0 ? (
        <p>No orders found matching the selected criteria.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>
            <tr>
              <th style={{ padding: '8px' }}>Order_ID</th>
              <th style={{ padding: '8px' }}>Crust</th>
              <th style={{ padding: '8px' }}>Flavor</th>
              <th style={{ padding: '8px' }}>Size</th>
              <th style={{ padding: '8px' }}>Table_No</th>
              <th style={{ padding: '8px' }}>Timestamp</th>
              <th style={{ padding: '8px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order, index) => (
              <tr key={order.Order_ID || index} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '8px' }}>{order.Order_ID}</td>
                <td style={{ padding: '8px' }}>{order.Crust}</td>
                <td style={{ padding: '8px' }}>{order.Flavor}</td>
                <td style={{ padding: '8px' }}>{order.Size}</td>
                <td style={{ padding: '8px' }}>{order.Table_No}</td>
                <td style={{ padding: '8px' }}>{new Date(order.Timestamp).toLocaleString()}</td>
                <td style={{ padding: '8px' }}>
                  <button
                    onClick={() => handleDelete(order)}
                    style={{
                      backgroundColor: 'red',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '5px 10px',
                      cursor: 'pointer'
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HistoryPage;
