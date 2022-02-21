import axios from "axios";

const fetchInventoryAsync = async () => {
  const res = await axios.get(INVENTORY_URL, {
    params: {
      paragraphs: 2,
      quotes: 2,
    },
  });

  return res;
};
