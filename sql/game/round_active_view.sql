DROP VIEW IF EXISTS game.round_active_view;


CREATE VIEW game.round_active_view AS
SELECT *
FROM game.round
WHERE status <> 'done'
  AND status <> 'error';
