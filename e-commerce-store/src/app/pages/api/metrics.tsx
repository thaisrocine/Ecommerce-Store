export default function handler(req, res) {
    if (req.method === 'POST') {
      const data = req.body;
  
  
      res.status(200).json({ success: true });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  