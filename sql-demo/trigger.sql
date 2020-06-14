CREATE OR REPLACE FUNCTION check_time()
  RETURNS trigger AS
$BODY$
BEGIN

  IF EXISTS(
    SELECT 1
    FROM "chat_message"
    WHERE (now() - created_at) < interval '10' second
    )
  THEN
    RAISE EXCEPTION 'EXCEEEEEEEP';
  END IF;

  RETURN NEW;
END;
$BODY$
  LANGUAGE plpgsql;


DROP TRIGGER IF EXISTS "check_time_trigger"
  ON "chat_message";


CREATE TRIGGER "check_time_trigger"
  BEFORE INSERT
  ON "chat_message"
  FOR EACH ROW
EXECUTE PROCEDURE check_time();
