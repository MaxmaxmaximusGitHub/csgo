CREATE OR REPLACE FUNCTION chat_message_rate_limit()
  RETURNS trigger AS
$BODY$
DECLARE
  rate_limit int;
BEGIN
  select "settings".chat_rate_limit into rate_limit from "settings";

  IF EXISTS(
    SELECT 1
    FROM "chat_message"
    WHERE
        author_id = NEW.author_id
        AND
        (now() - created_at) < interval '1 second' * rate_limit
    )
  THEN
    RAISE EXCEPTION 'Можно постить раз в % сек', rate_limit;
  END IF;

  RETURN NEW;
END;
$BODY$
  LANGUAGE plpgsql;


DROP TRIGGER IF EXISTS "chat_message_rate_limit_trigger"
  ON "chat_message";


CREATE TRIGGER "chat_message_rate_limit_trigger"
  BEFORE INSERT
  ON "chat_message"
  FOR EACH ROW
EXECUTE PROCEDURE chat_message_rate_limit();
