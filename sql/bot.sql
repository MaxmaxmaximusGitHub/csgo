DROP VIEW IF EXISTS "bot";


CREATE VIEW "bot" AS
  SELECT * FROM "user"
  WHERE bot = true

