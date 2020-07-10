------------------------------------------------------------
-- view_current_user
------------------------------------------------------------
DROP VIEW IF EXISTS public.view_current_user;

CREATE VIEW public.view_current_user AS
SELECT *
FROM "user";



------------------------------------------------------------
-- view_active_round
------------------------------------------------------------
DROP VIEW IF EXISTS game.view_active_round;

CREATE VIEW game.view_active_round AS
SELECT *
FROM game.round
WHERE status <> 'done'
  AND status <> 'error';


------------------------------------------------------------
-- view_my_item
------------------------------------------------------------
DROP VIEW IF EXISTS game.view_my_item;

CREATE VIEW game.view_my_item AS
SELECT *
FROM game.item;


------------------------------------------------------------
-- view_active_bet
------------------------------------------------------------
DROP VIEW IF EXISTS game.view_active_bet;

CREATE VIEW game.view_active_bet AS
SELECT *
FROM game.bet
WHERE game.bet.round_id IN (
  SELECT id
  FROM game.round
  WHERE game.round.status NOT IN ('error', 'done')
);



