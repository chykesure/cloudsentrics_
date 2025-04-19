const validTokens = [
    { email: 'chyke@gmail.com', token: '123456' },
    { email: 'test@example.com', token: '654321' }
  ];
  
  app.post('/verify-token', (req, res) => {
    const { email, token } = req.body;
  
    const isValid = validTokens.some(entry => entry.email === email && entry.token === token);
  
    res.json({ valid: isValid });
  });
  