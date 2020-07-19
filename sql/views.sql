------------------------------------------------------------
-- view_current_user
------------------------------------------------------------
CREATE OR REPLACE  VIEW public.view_current_user AS
SELECT *
FROM "user";



------------------------------------------------------------
-- view_active_round
------------------------------------------------------------
CREATE OR REPLACE  VIEW game.view_active_round AS
SELECT *
FROM game.round
WHERE status <> 'done'
  AND status <> 'error';


------------------------------------------------------------
-- view_my_item
------------------------------------------------------------
CREATE OR REPLACE VIEW game.view_my_item AS
SELECT *
FROM game.item;


------------------------------------------------------------
-- view_active_bet
------------------------------------------------------------
CREATE OR REPLACE  VIEW game.view_active_bet AS
SELECT *
FROM game.bet
WHERE game.bet.round_id IN (
  SELECT id
  FROM game.round
  WHERE game.round.status NOT IN ('error', 'done')
);



