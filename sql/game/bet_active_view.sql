DROP VIEW IF EXISTS game.bet_active_view;


CREATE VIEW game.bet_active_view AS
SELECT *
FROM game.bet
WHERE game.bet.round_id IN (
  SELECT id
  FROM game.round
  WHERE game.round.status NOT IN ('error', 'done')
);


