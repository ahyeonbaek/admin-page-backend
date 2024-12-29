const Accomo = require('../schemas/accomo.schema');

const registAccomo = async(req, res) => {
    try{
        const {
            accommodationName,
            roadAddress,
            jibunAddress,
            zoneCode,
            x,
            y,
            detailAddress,
            contactNumber,
            introduction,
            service
        } = req.body;

        const newAccomo = new Accomo({
            accommodationName,
            roadAddress,
            jibunAddress,
            zoneCode,
            x,
            y,
            detailAddress,
            contactNumber,
            introduction,
            service
        });

        await newAccomo.save();
        return newAccomo;
        
    }catch(err) {
        console.log('숙소등록 실패', err);
        res.status(500).json({
            isError: true,
            message:'서버 오류, 숙소등록 실패'
        })
    }
}

module.exports = {registAccomo};