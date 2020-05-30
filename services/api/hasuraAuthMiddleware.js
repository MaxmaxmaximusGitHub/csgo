export default function hasuraAuthMiddleware(req, res, next) {
  const requiredSecret = req.headers['x-hasura-action-secret']
  const providedSecret = process.env.HASURA_GRAPHQL_ACTION_SECRET
  if (requiredSecret === providedSecret) next();
  else res.sendStatus(403);
}
