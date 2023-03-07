import { check, param } from "express-validator";
import { isIPv4 } from 'validator';

const validateCreateGateway = [
  check("serial")
    .exists()
    .not()
    .isEmpty()
    .isLength({ min: 10 })
    .withMessage("Serial must be at least 10 chars long"),

  check("name").exists().not().isEmpty().withMessage("Name is required"),

  check("ipv4")
    .exists()
    .not()
    .isEmpty()
    .withMessage("IPv4 is required")
    .custom((value) => {
      if (!isIPv4(value)) {
        throw new Error("Invalid IPv4 address");
      }
      return true;
    }),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateGatewayId = [
  param("id").exists().isMongoId().withMessage("Invalid gateway ID"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export { validateCreateGateway, validateGatewayId };
