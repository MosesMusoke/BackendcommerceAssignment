
const requireAuth = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized - Missing Token' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ error: 'Unauthorized - Invalid Token' });
    }
  };
  
const requireAdmin = (req, res, next) => {
    // Checking if the user has the 'admin' role
    if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden - Admin access required' });
    }

    next();
};
  
  module.exports = { requireAuth, requireAdmin };
  