const express = require('express');
const router = express.Router();

const Accounts = require('./accounts-model.js');

// find,
// findById,
// add,
// remove,
// update

router.get('/', async (req, res) => {
    try {
        const accounts = await Accounts.find();
        res.status(200).json(accounts)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error retrieving accounts'
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const account = await Accounts.findById(req.params.id);
        
        if (account) {
            res.status(200).json(account)
        } else {
            res.status(404).json({
                message: 'Account not found'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error retrieving account'
        })
    }
})

router.post('/', async (req, res) => {
    try {
      const account = await Accounts.add(req.body);
      res.status(201).json(account);
    } catch (error) {
        res.status(500).json({
            message: 'Error adding the account'
        })
    }
  });

router.delete('/:id', async (req, res) => {
    try {
        const account = await Accounts.remove(req.params.id);
        
        if (account) {
            res.status(200).json({
                message: "Account has been deleted"
            })
        } else {
            res.status(404).json({
                message: 'Account not found'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error removing account'
        })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const account = await Accounts.update(req.params.id, req.body);
        
        if (account) {
            res.status(200).json(account)
        } else {
            res.status(404).json({
                message: 'Account not found'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error updating account'
        })
    }
})



module.exports = router;